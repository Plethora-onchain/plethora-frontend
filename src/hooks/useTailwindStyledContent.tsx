import React from "react";
import parse from "html-react-parser";
import Image from "next/image";

export const TailwindStyledContent = ({ content }: { content: any }) => {
  const options = {
    replace: (domNode:any) => {
      if (domNode.type === "tag") {
        let newProps = { ...domNode.attribs };

        switch (domNode.name) {
          case "h1":
            newProps.className = "text-2xl font-semibold mb-4";
            break;
          case "h2":
            newProps.className = "text-xl font-semibold mb-3";
            break;
          case "h3":
            newProps.className = "text-xl font-medium mb-2";
            break;
          case "p":
            newProps.className = "text-lg mb-4";
            break;
          case "a":
            newProps.className = "text-blue-500 hover:text-blue-700 underline";
            break;
          case "ul":
            newProps.className = "list-disc list-inside mb-4";
            break;
          case "ol":
            newProps.className = "list-decimal list-inside mb-4";
            break;
          case "li":
            newProps.className = "mb-1";
            break;
          case "code":
            newProps.className = "bg-gray-100 rounded p-1 font-mono text-sm";
            break;
          case "pre":
            newProps.className = "bg-gray-100 rounded p-4 mb-4 overflow-x-auto";
            break;
          case "img":
            if (
              domNode.attribs.src.includes(
                "medium.com/_/stat?event=post.clientViewed"
              )
            ) {
              return null;
            }
            return (
              <Image
                src={domNode.attribs.src}
                alt={domNode.attribs.alt || ""}
                width={500}
                height={500}
                layout="responsive"
                className="rounded-lg my-4 max-h-[700px]"
              />
            );
        }

        return {
          ...domNode,
          attribs: newProps,
        };
      }
    },
  };

  return <div className="prose-lg max-w-none">{parse(content, options)}</div>;
};

// // Usage
// const YourComponent = ({ hashnodeDetails }) => {
//   return (
//     <div className="mb-10">
//       <TailwindStyledContent content={hashnodeDetails?.content} />
//     </div>
//   );
// };

// export default YourComponent;
