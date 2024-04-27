import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="CodeSharingApp">CodeSharingApp</Link>
        </li>
        <li>
          <Link href="RecipePage1">RecipePage1</Link>
        </li>
      </ul>
    </div>
  );
}
