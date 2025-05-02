// app/page.js
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Diary App</h1>
        <nav className="flex space-x-4">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link href="/diaries" className="text-blue-600 hover:underline">
            My Diaries
          </Link>
          <Link href="/diaries/new" className="text-blue-600 hover:underline">
            New Diary
          </Link>
        </nav>
      </header>

      <main>
        <p className="text-lg text-gray-700">
          환영합니다! 일기를 작성하거나 지난 일기를 확인해보세요.
        </p>
        {/* 여기에 주요 배너나 소개 컴포넌트를 넣어도 좋습니다 */}
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Diary App. All rights reserved.
      </footer>
    </div>
  );
}
