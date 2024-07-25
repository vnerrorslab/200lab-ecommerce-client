'use client';

import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useBoolean } from 'src/hooks/use-boolean';

import { _products } from 'src/_mock';

import Iconify from 'src/components/iconify';

import EcommerceFilters from '../product/filters/ecommerce-filters';
import EcommerceProductList from '../product/list/ecommerce-product-list';
import EcommerceProductListBestSellers from '../product/list/ecommerce-product-list-best-sellers';

// ----------------------------------------------------------------------

const VIEW_OPTIONS = [
  { value: 'list', icon: <Iconify icon="carbon:list-boxes" /> },
  { value: 'grid', icon: <Iconify icon="carbon:grid" /> },
];

// ----------------------------------------------------------------------

export default function EcommerceProductsView() {
  const mobileOpen = useBoolean();

  const loading = useBoolean(true);

  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  const handleChangeViewMode = useCallback(
    (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
      if (newAlignment !== null) {
        setViewMode(newAlignment);
      }
    },
    []
  );

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          py: 5,
        }}
      >
        <Typography variant="h3">Catalog</Typography>

        <Button
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="carbon:filter" width={18} />}
          onClick={mobileOpen.onTrue}
          sx={{
            display: { md: 'none' },
          }}
        >
          Filters
        </Button>
      </Stack>

      <Stack
        direction={{
          xs: 'column-reverse',
          md: 'row',
        }}
        sx={{ mb: { xs: 8, md: 10 } }}
      >
        <Stack spacing={5} divider={<Divider sx={{ borderStyle: 'dashed' }} />}>
          <EcommerceFilters open={mobileOpen.value} onClose={mobileOpen.onFalse} />
          <EcommerceProductListBestSellers products={_products.slice(0, 3)} />
        </Stack>

        <Box
          sx={{
            flexGrow: 1,
            pl: { md: 8 },
            width: { md: `calc(100% - ${280}px)` },
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
            <ToggleButtonGroup
              exclusive
              size="small"
              value={viewMode}
              onChange={handleChangeViewMode}
              sx={{ borderColor: 'transparent' }}
            >
              {VIEW_OPTIONS.map((option) => (
                <ToggleButton key={option.value} value={option.value}>
                  {option.icon}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Stack>

          <EcommerceProductList
            loading={loading.value}
            viewMode={viewMode}
            products={_products.slice(0, 16)}
          />
        </Box>
      </Stack>
    </Container>
  );
}
