import { ReactNode } from 'react';

export type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type LayoutProps = {
  children: ReactNode;
};

export type ServerAction = <T = unknown>(
  ...params: [prevState: unknown, formData: FormData]
) => T;
