import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';
import { Suspense } from "react";

test('Page', async () => {
 render(
   <Suspense>
     <Home />
   </Suspense>
 );

 expect(screen.getByRole("heading")).toBeDefined();
});