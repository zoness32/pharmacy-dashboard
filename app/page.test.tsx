import { test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './page';
import { Suspense } from "react";

test('Page', async () => {
  render(
    <Suspense>
      <Home/>
      </Suspense>
  );

  await screen.findByRole('heading', { name: /Patients/i });
});