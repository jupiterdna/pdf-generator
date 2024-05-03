import { temp } from "../../component/GenerateContract2";
import { receipt } from "../../component/GenerateReceipt";
import { pdf } from "@react-pdf/renderer";
import { v4 as uuidv4 } from "uuid";
import { promises as fsP } from "fs";

export async function POST(request: Request) {
  const reqBody = await request.text();

  if (!reqBody) {
    return Response.json({ error: "No data provided" }, { status: 400 });
  }

  const fileName = `${uuidv4()}.pdf`;
  try {
    const data = JSON.parse(reqBody);
    const template = data?.document_type === "contract" ? temp : receipt;
    const blob = await pdf(template(data)).toBlob();
    const buffer = await blob.arrayBuffer();
    const base64 = await Buffer.from(buffer).toString("base64");
    // fs.writeFileSync('public/test.pdf', base64, );
   
    const filePath = `public/pdf/${fileName}`;
    const asPdf = await fsP.writeFile(filePath, base64, "base64");

    setTimeout(() => {
      deleteFile(filePath);
    }, 1000 * 60);

    const url = `${process.env.HOST}:${process.env.PORT}/pdf/${fileName}`;

    return Response.json({ data: url }, { status: 200 });
  } catch (error) {
    const xxx = `${process.env.HOST}:${process.env.PORT}/pdf/${fileName}`;
    return Response.json({ error: `There is an error in generating pdf ${xxx}`, err: error }, { status: 400 });
  }
}

const deleteFile = async (filePath: string) => {
  await fsP.unlink(filePath);
};
