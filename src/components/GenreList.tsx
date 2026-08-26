import useGenres from "@/hooks/useGenres";
import type { Genre } from "@/hooks/useGenres";

import getCroppedImageURL from "@/services/image-url";
import {
  List,
  HStack,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root variant="plain">
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack width="full">
              <Image
                boxSize="32px"
                flexShrink={0}
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageURL(genre.image_background)}
              />
              <Button
                flex="1"
                minWidth={0}
                height="auto"
                paddingX={0}
                paddingY={1}
                whiteSpace="normal"
                textAlign="left"
                justifyContent="flex-start"
                lineHeight="shorter"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="plain"
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
