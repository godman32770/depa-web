import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome to Coachlab</h1>
        <p className="text-gray-600 mb-6">Please login or register to start using the platform.</p>
        <div className="flex justify-center gap-4">
          <Link href="/login" className="text-orange-500 hover:underline">
            Login
          </Link>
          <Link href="/register" className="text-secondary hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}