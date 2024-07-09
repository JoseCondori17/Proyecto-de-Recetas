import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

interface FormTextProps {
  preview: string | null;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function FormText({ preview, value, onChange }: FormTextProps) {
  return (
    <div className={'flex flex-col w-full gap-2'}>
      <Textarea
        placeholder="Tell us a little bit about yourself"
        className="resize-none border-0 shadow-none"
        value={value}
        onChange={onChange}
      />
      {preview && (
        <Image src={preview}
               alt={'image-post'}
               width={250}
               height={250}
               className={'rounded-xl'}
        />
      )}
    </div>
  );
}