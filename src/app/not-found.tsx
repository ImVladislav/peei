import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Сторінка відсутня</h1>
      <Link href="/">Перейти на головну сторінку</Link>
    </div>
  );
};

export default NotFound;
