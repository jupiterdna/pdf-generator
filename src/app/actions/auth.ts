"use server";

import { createSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import { connect } from "../testdb/action";
import bcrypt from 'bcrypt'

const hashpass = async (password: string) => { 
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

const comparePass = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash)
}

export async function login(formData: FormData) { 
    const username = formData.get('email')
    const unhassPass = formData.get('password') as string
    
    const con = await connect()
    const user: any = await con.query('SELECT * FROM tbl_users WHERE email_address = ?', [username])
    
    
    if (user?.[0]?.length) {

        const password = user[0][0].password

        const isMatch = await comparePass(unhassPass, password)

        // await createSession(user[0][0].id)
        if(isMatch) {
            await createSession(user[0][0].id)
            redirect('/testdb')
        }
    }
    
    redirect('/auth/login')

}



export async function signup(formData: FormData) {
  // Previous steps:
  // 1. Validate form fields
  // 2. Prepare data for insertion into database
  // 3. Insert the user into the database or call an Library API

  const con = await connect();
  const name = formData.get("name");
  const email = formData.get("email");
  const username = formData.get("username");
  const password = (formData.get("password") || '123456') as string

  const encryptpass = await hashpass(password)

  await con.query(
    "INSERT INTO tbl_users (name, email_address, username, password) VALUES (?, ?, ?, ?)",
    [name, email, username, encryptpass]
  );
  await con.query("SELECT * FROM tbl_users WHERE username = ?", [username]);

  const lastInsert: any = await con.query("SELECT LAST_INSERT_ID() as id");

  if (lastInsert?.[0]?.length) {
    await createSession(lastInsert[0][0].id);
  }

  // Current steps:
  // 4. Create user session

  // 5. Redirect user
  redirect("/testdb");
}
