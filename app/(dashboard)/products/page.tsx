import { Protect } from "@clerk/nextjs";
import Link from "next/link";

export default function Products() {
  return (
    <Protect
      permission="org:test:test"
      fallback={<p>You do not have the permissions to create an invoice.</p>}
    >
      <Link href={"/"}>products</Link>;
    </Protect>
  );
}
