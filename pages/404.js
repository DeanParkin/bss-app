// 404.js
import Link from "next/link";

export default function FourOhFour() {
  return <>
    <div className="container text-center">
      <h2 className="h2 text-primary baskerville-font mt-3">
        404 - Page Not Found
      </h2>
      <Link href="/">
        Go back home
      </Link>
    </div>
  </>;
}
