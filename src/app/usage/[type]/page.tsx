"use client";
import { CodeBlock, CopyBlock, atomOneDark } from "react-code-blocks";
import { usage, contractData } from "../components/usage";
import { navigate } from "./actions";
import TemplateContract from "../components/TemplateContract";
import Template from "../components/Template";

export default function Page({
  params,
}: {
  params: { type: "contract" | "receipt" };
}) {
  if (params.type !== "contract" && params.type !== "receipt") {
    navigate();
    return null;
  }

  return (
    <div className="w-full">
      <h2 className="text-xl lg:text-4xl mb-4 pb-3 border-b border-gray-200 flex items-center gap-x-2">Usage for generating {params.type} PDF file</h2>
      {params.type === "contract" ? <TemplateContract /> : <Template />}
    </div>
  );
}
