import styles from '@/app/ui/home.module.css';

export default function Page() {
  return (
    <main className="flex-col flex min-h-screen">
      <div className="mt-4 flex grow flex-col gap-4">
        <div className="flex flex-col justify-center items-center gap-1 rounded-lg bg-gray-100 p-4 ml-6 ">
          <h1 className="text-3xl font-bold ">Hello, World!</h1>
          <strong>Welcome to Acme. こんにちわ</strong> This is the example for
          the
          <p className="jp-text">日本語 English</p>
          <p className="en-text">日本語 English</p>
        </div>
      </div>
    </main>
  );
}
