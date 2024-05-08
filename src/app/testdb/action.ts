'use server'
import mysql from 'mysql2/promise';
import { redirect } from 'next/navigation'
export const connect = async () => { 
    const con = await mysql
    .createConnection({
      user: 'root',
          database: 'test_db',
          password: 'example',
          host: 'localhost',
    })
    return con
  }

export async function submitForm(formData: FormData) {

    const name = formData.get('name')
    const connection = await connect()
    connection.query('INSERT INTO tbl_users (name) VALUES (?)', [name])

    formData.set('name', '')
    redirect('/testdb/')
}

export async function updateData(formData: FormData) {

  const name = formData.get('name')
  const id = formData.get('id')

  const connection = await connect()
  connection.query('UPDATE tbl_users SET name = ? WHERE id = ?', [name, id])

  redirect('/testdb/')
}


export async function deleteRow(id: number) {
    const connection = await connect()
    connection.query('DELETE FROM tbl_users WHERE id = ?', [id])
    redirect('/testdb/')
}