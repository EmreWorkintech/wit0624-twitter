import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPost } from "./api";

export const useAddPost = () => {
  //10. Provider'daki queryClient'a eriş
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      //11. onSuccess'de ilgili query'leri invalide et.
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
