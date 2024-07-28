import { getAllCategories } from "@/utilies/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
;

const CategoryList = async () => {
  const { data: allCategory } = await getAllCategories();

  return (
    <Box className="bg-gray-100 mt-6 py-2 px-5">
      <Typography variant="h6">Categories</Typography>
      <Divider />
      <Stack rowGap={1} sx={{ mt: 2.5 }}>
        {allCategory.map((category) => (
          <Button variant="outlined" key={category.id}>
            <Link
              href={`/categories/news?category=${category.title.toLowerCase()}`}
            >
              {category.title}
            </Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryList;
