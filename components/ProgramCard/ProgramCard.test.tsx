import { render, screen } from '@testing-library/react';
import type { ProgramContent } from '@/lib/content';
import { ProgramCard } from './ProgramCard';

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

describe('ProgramCard', () => {
  const program = {
    degree: 'Бакалавриат',
    title: 'Безопасность компьютерных систем',
    code: '10.03.01',
    profile: 'Информационная безопасность',
    description: 'Изучение методов защиты данных, систем и сетей.',
    subjects: ['Основы цифровых расследований', 'Компьютерная экспертиза', 'Криптографические протоколы', 'Защита программ и данных'],
    format: 'Очная',
    slug: 'is',
  } as ProgramContent;

  it('рендерит основную информацию о программе', () => {
    render(<ProgramCard program={program} />);

    expect(screen.getByText('Бакалавриат')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Безопасность компьютерных систем' })
    ).toBeInTheDocument();
    expect(screen.getByText('10.03.01 · Информационная безопасность')).toBeInTheDocument();
    expect(screen.getByText('Изучение методов защиты данных, систем и сетей.')).toBeInTheDocument();
    expect(screen.getByText('Очная')).toBeInTheDocument();
  });

  it('показывает только первые 3 предмета', () => {
    render(<ProgramCard program={program} />);

    expect(screen.getByText('Основы цифровых расследований')).toBeInTheDocument();
    expect(screen.getByText('Компьютерная экспертиза')).toBeInTheDocument();
    expect(screen.getByText('Криптографические протоколы')).toBeInTheDocument();
    expect(screen.queryByText('Защита программ и данных')).not.toBeInTheDocument();
  });

  it('строит ссылку по basePath по умолчанию', () => {
    render(<ProgramCard program={program} />);

    expect(screen.getByRole('link', { name: /открыть программу/i })).toHaveAttribute(
      'href',
      '/academics/is'
    );
  });

  it('поддерживает кастомный basePath', () => {
    render(<ProgramCard program={program} basePath="/programs" />);

    expect(screen.getByRole('link', { name: /открыть программу/i })).toHaveAttribute(
      'href',
      '/programs/is'
    );
  });
});