import { bookmark, getPost, isBookmarked } from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import profileDemo from "@/assets/profileImg.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { multiFormatDateString } from "@/lib/checkData";
import { Bookmark, BookmarkCheck, Dot, HandHeart, Link } from "lucide-react";
import Comments from "@/components/Comments";
import { useEffect } from "react";
import Spinner from "@/components/Spinner";

const PostDetail = () => {
  const { postId } = useParams();
  const queryClient = useQueryClient();
  console.log(postId);

  const { data, isPending } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPost({ postId }),
  });

  const { data: isBookmark } = useQuery({
    queryKey: ["check-bookmark", data?.id],
    queryFn: () => isBookmarked(data?.id),
  });
  const { mutateAsync: BookmarkMutate } = useMutation({
    mutationFn: bookmark,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["check-bookmark"] });
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const createdAt = multiFormatDateString(data?.createdAt);
  const authorName = data?.authorName
    ? `${data?.authorName.charAt(0).toUpperCase()}${data?.authorName.slice(1)}`
    : "";

  const handleBookmark = async () => {
    await BookmarkMutate(data?.id);
  };

  if (isPending) return <Spinner />;

  return (
    <div className='max-w-[45rem] mx-auto w-full'>
      <div className='my-14'>
        <div className='text-4xl font-bold'>{data?.title}</div>
        <div className='flex gap-4 py-8 border-b'>
          <Avatar className='cursor-pointer size-12'>
            <AvatarImage
              src={data?.authorAvatar}
              alt=''
            />
            <AvatarFallback>
              <img
                src={profileDemo}
                alt=''
              />
            </AvatarFallback>
          </Avatar>

          <span className='flex flex-col justify-center'>
            <p className='font-semibold text-gray-700'>{authorName}</p>
            <span className='flex'>
              <p className='text-sm font-medium text-gray-600'>
                {data?.readTime} min read
              </p>
              <Dot className='text-gray-600 size-5' />
              <p className='text-sm font-medium text-gray-600'>{createdAt}</p>
              <Dot className='text-gray-600 size-5' />
              <p className='px-2 text-sm pb-0.5 font-medium text-gray-600 bg-gray-200 rounded-full'>
                {data?.tag}
              </p>
            </span>
          </span>
        </div>

        <div className='flex items-center justify-between border-b'>
          <span className='flex items-center gap-2 py-2 '>
            <HandHeart className='text-gray-500 cursor-pointer size-7' />
            <Comments />
          </span>
          <span className='flex items-center gap-6'>
            <button
              className=''
              onClick={handleBookmark}>
              {isBookmark ? (
                <BookmarkCheck className='text-gray-500 size-6' />
              ) : (
                <Bookmark className='text-gray-500 size-6' />
              )}
            </button>
            <Link className='text-gray-500 size-6' />
          </span>
        </div>

        <div className='pt-16'>
          <img
            src={data?.previewImage}
            alt=''
          />
        </div>

        <div
          className='pt-10 htmlContentDetail'
          dangerouslySetInnerHTML={{ __html: data?.content }}></div>
      </div>

      <div className='flex items-center justify-between border-b'>
        <span className='flex items-center gap-2 py-2 '>
          <HandHeart className='text-gray-500 cursor-pointer size-7' />
          <Comments />
        </span>
        <span className='flex items-center gap-6'>
          <button
            className=''
            onClick={handleBookmark}>
            {isBookmark ? (
              <BookmarkCheck className='text-gray-500 size-6' />
            ) : (
              <Bookmark className='text-gray-500 size-6' />
            )}
          </button>
          <Link className='text-gray-500 size-6' />
        </span>
      </div>
    </div>
  );
};
export default PostDetail;
