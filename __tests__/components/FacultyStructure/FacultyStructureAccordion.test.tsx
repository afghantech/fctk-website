import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FacultyStructureAccordion } from '@/components/FacultyStructure/FacultyStructureAccordion';
import type { FacultyStructureUnit } from '@/lib/content';

describe('FacultyStructureAccordion', () => {
  const units: FacultyStructureUnit[] = [
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
        {
          fullName: 'Петрова Анна Сергеевна',
          position: 'Заместитель декана',
          phone: '+7 (3812) 000-001',
          email: 'deputy@example.com',
          isLeader: false,
        },
      ],
    },
    {
      slug: 'structure-chair-is',
      title: 'Кафедра информационной безопасности',
      order: 2,
      published: true,
      unitType: 'department',
      employees: [
        {
          fullName: 'Сидоров Сергей Павлович',
          position: 'Заведующий кафедрой',
          phone: '+7 (3812) 000-010',
          email: 'head.is@example.com',
          isLeader: true,
          photoSrc: '/images/staff/head-is.jpg',
        },
      ],
    },
  ];

  it('открывает и закрывает подразделы', async () => {
    const user = userEvent.setup();
    render(<FacultyStructureAccordion units={units} />);

    expect(screen.queryByText('Иванов Иван Иванович')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Деканат' }));
    expect(screen.getByText('Иванов Иван Иванович')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Кафедра информационной безопасности' }));
    expect(screen.getByText('Сидоров Сергей Павлович')).toBeInTheDocument();
    expect(screen.queryByText('Иванов Иван Иванович')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Кафедра информационной безопасности' }));
    expect(screen.queryByText('Сидоров Сергей Павлович')).not.toBeInTheDocument();
  });

  it('рендерит контакты и фото лидера со строгими атрибутами', async () => {
    const user = userEvent.setup();
    render(<FacultyStructureAccordion units={units} />);

    await user.click(screen.getByRole('button', { name: 'Деканат' }));

    expect(screen.getByText('Декан')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '+7 (3812) 000-000' })).toHaveAttribute(
      'href',
      'tel:+7 (3812) 000-000'
    );
    expect(screen.getByRole('link', { name: 'dean@example.com' })).toHaveAttribute(
      'href',
      'mailto:dean@example.com'
    );

    const img = screen.getByRole('img', { name: 'Иванов Иван Иванович' });
    expect(img).toHaveAttribute('draggable', 'true');
    expect(img).toHaveAttribute('src', '/images/staff/dean.jpg');

    expect(img.style.marginLeft).toBe('0px');
    expect(img.style.marginRight).toBe('0px');
    expect(img.style.marginTop).toBe('0px');
    expect(img.style.marginBottom).toBe('-4px');
    expect(img.style.textAlign).toBe('start');
    expect(img.style.textIndent).toBe('0px');
    expect(img.style.display).toBe('inline');

    expect(screen.queryByRole('img', { name: 'Петрова Анна Сергеевна' })).not.toBeInTheDocument();
  });
});
