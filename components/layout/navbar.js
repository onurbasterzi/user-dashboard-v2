import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
       LOGO
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/users/new-user">
        <a>New User</a>
      </Link>

    </nav>
  );
};

export default Navbar;
