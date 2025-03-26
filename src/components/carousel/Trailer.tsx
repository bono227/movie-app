import { useFetchDataFromTMDB } from "@/hooks";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui";
import { Play } from "lucide-react";
import Youtube from "react-youtube";

type TrailerProps = {
  id: number;
};

export const Trailer = ({ id }: TrailerProps) => {
  const { data } = useFetchDataFromTMDB<MovieVideosResponse>(
    `/movie/${id}/videos?language=en-US`
  );

  const movieTrailer = data?.results?.find((movie) => movie.type === "Trailer");
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">
            <Play size={16} />
            <h4 className="text-sm">Watch Trailer</h4>
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>
            Trailer
            {/* <VisuallyHidd>Movie Trailer</VisuallyHidd> */}
          </DialogTitle>
          <Youtube
            videoId={movieTrailer?.key}
            opts={{ width: "100%", height: 300 }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
