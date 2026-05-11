import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AboutSections from '@/app/about/sections';

const facultyUnits = [
  {
    slug: 'structure-deanery',
    title: 'Деканат',
    order: 1,
    published: true,
    unitType: 'deanery',
    employees: [
      {
        fullName: 'Иванов Иван Иванович',
        position: 'Декан',
        phone: '+7 (3812) 000-000',
        email: 'dean@example.com',
        isLeader: true,
        photoSrc: '/images/staff/dean.jpg',
      },
    ],
  },
] as const;

describe('AboutSections', () => {
  it('открывает секцию и закрывает по кнопке "Назад к разделам"', async () => {
    const user = userEvent.setup();

    render(
      <AboutSections
        sections={[
          {
            slug: 'about-faculty',
            title: 'О факультете',
            html: '<p>Текст о факультете</p>',
            order: 1,
            published: true,
          },
          {
            slug: 'faculty-structure',
            title: 'Структура факультета',
            html: '<p>Вводный текст структуры</p>',
            order: 2,
            published: true,
          },
        ]}
        facultyStructureUnits={[...facultyUnits]}
      />
    );

    const structureButton = screen.getByRole('button', { name: 'Структура факультета' });
    expect(structureButton).toHaveAttribute('aria-expanded', 'false');

    await user.click(structureButton);
    expect(structureButton).toHaveAttribute('aria-expanded', 'true');

    expect(screen.getByText('Вводный текст структуры')).toBeInTheDocument();
    expect(document.getElementById('about-panel-faculty-structure')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Назад к разделам' }));
    expect(structureButton).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText('Вводный текст структуры')).not.toBeInTheDocument();
  });

  it('для faculty-structure показывает вложенный аккордеон структуры факультета', async () => {
    const user = userEvent.setup();

    render(
      <AboutSections
        sections={[
          {
            slug: 'faculty-structure',
            title: 'Структура факультета',
            html: '<p>Вводный текст структуры</p>',
            order: 2,
            published: true,
          },
        ]}
        facultyStructureUnits={[...facultyUnits]}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Структура факультета' }));

    expect(document.getElementById('about-panel-faculty-structure')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Деканат' })).toBeInTheDocument();
  });
});
