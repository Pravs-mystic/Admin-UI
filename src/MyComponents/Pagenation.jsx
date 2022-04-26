import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagenation = () => {
  return (
    <div>
          <Stack spacing={2}>
              <Pagination count={5} showFirstButton showLastButton />
          </Stack>
    </div>
  )
}

export default Pagenation
