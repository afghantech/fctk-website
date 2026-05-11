import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Footer } from '@/components/Footer/Footer';
import { Hero } from '@/components/Hero/Hero';
import { ContactBlock } from '@/components/ContactBlock/ContactBlock';
import { Header } from '@/components/Header/Header';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    priority,
    ...props
  }: {
    src: string;
    alt: string;
    priority?: boolean;
    [key: string]: unknown;
  }) => <img src={src} alt={alt} {...props} />,
}));

jest.mock('next/navigation', () => ({
  usePathname: () => '/about',
}));

describe('Layout pieces', () => {
  it('Footer рендерит год и ссылки разделов', () => {
    render(<Footer />);
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Обучение' })).toHaveAttribute('href', '/academics');
    expect(screen.getByRole('link', { name: 'Наука' })).toHaveAttribute('href', '/nauka');
    expect(screen.getByRole('link', { name: 'Контакты' })).toHaveAttribute('href', '/contacts');
  });

  it('Hero показывает заголовок и изображение', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', { name: /стань специалистом/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Баннер факультета и корпус ОмГУ' })).toHaveAttribute(
      'src',
      '/images/campus-hero.png'
    );
  });

  it('ContactBlock выводит контакты и ссылку на карту', () => {
    render(<ContactBlock />);
    expect(screen.getByRole('heading', { name: 'Контакты и адрес' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Открыть карту' })).toHaveAttribute('target', '_blank');
  });

  it('Header показывает навигацию и открывает мобильное меню', () => {
    render(<Header />);

    expect(screen.getByRole('link', { name: 'Факультет' })).toHaveAttribute('aria-current', 'page');

    const menuButton = screen.getByRole('button', { name: 'Открыть меню' });
    fireEvent.click(menuButton);

    expect(screen.getByRole('button', { name: 'Закрыть меню' })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Главная' }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('link', { name: 'Контакты' }).length).toBeGreaterThanOrEqual(1);
  });
});
