import type { Metadata } from 'next';
import Link from 'next/link';

const termsPageBody =
  'Review the terms governing your use of Aptiverse, purchases, intellectual property, and legal rights.';
const bodySummary = `${termsPageBody.slice(0, 100)}...`;

export const metadata: Metadata = {
  title: 'Success',
  description: bodySummary,
  openGraph: {
    title: 'Success',
    description: bodySummary,
    type: 'article'
  }
};

export default async function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-gray-300 p-8 text-center dark:border-gray-700">
          <div className="mb-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <svg
                className="h-8 w-8 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h1 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200">Success!</h1>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Your order was completed successfully. Check your email for confirmation and access
            details.
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-green-600 px-6 py-2 font-semibold text-white transition hover:bg-green-700"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
