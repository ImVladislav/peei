import Link from "next/link";

const AboutUs = () => {
  return (
    <div>
      <p>
        Відвідайте сторінку
        <Link href="/aboutUs">
          <button>Кнопка з посиланням</button>
        </Link>
      </p>
    </div>
  );
};

export default AboutUs;
