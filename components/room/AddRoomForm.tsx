"use client ";

import { zodResolver } from "@hookform/resolvers/zod";
import { Homestay, Room } from "@prisma/client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Loader2, Pen, PencilLine, XCircle } from "lucide-react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { UploadButton } from "../uploadthing";
import { useRouter } from "next/navigation";

interface AddRoomFormProps {
  homestay?: Homestay & {
    rooms: Room[];
  };
  room?: Room;
  handleDialogueOpen: () => void;
}

const formschema = z.object({
  title: z.string().min(3, {
    message: "Tittle must be atleast 3 characters long.",
  }),
  description: z.string().min(10, {
    message: " description must be atleast 10 characters long.",
  }),
  image: z.string().min(1, {
    message: "Image is required",
  }),
  bedCount: z.coerce.number().min(1, {
    message: "Bed count is required",
  }),
  breakFastPrice: z.coerce.number().optional(),
  roomPrice: z.coerce.number().min(1, {
    message: "Room price  is required",
  }),
});

const AddRoomForm = ({
  homestay,
  room,
  handleDialogueOpen,
}: AddRoomFormProps) => {
  const [image, setImage] = useState<string | undefined>(room?.image);
  const [imageIsDeleting, setImageIsDeleting] = useState(false);
  const [isLoading, setIsLoading]= useState(false)
  const router = useRouter()
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues: room || {
      title: "",
      description: "",
      image: "",
      bedCount: 0,
      breakFastPrice: 0,
      roomPrice: 0,
    },
  });

  const handleImageDelete = async (imageUrl: string) => {
    setImageIsDeleting(true);
    const imageKey = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);

    try {
      const res = await axios.post("/api/uploadthing/delete", {
        imagekey: imageKey,
      });
      if (res.data.success) {
        setImage("");
        toast({
          variant: "success",
          description: "Image removed",
        });
      } else {
        throw new Error("Failed to delete image");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong while deleting the image",
      });
    } finally {
      setImageIsDeleting(false);
    }
  };


  async function onSubmit(values: z.infer<typeof formschema>) {
    setIsLoading(true);

    if (homestay && room ) {
      axios
      .patch(`/api/room/${room.id}`, values)
      .then((res) => {
        toast({
          variant: "success",
          description: "room updated",
        });
        router.refresh
        setIsLoading(false);
        handleDialogueOpen()
      })
      .catch((err) => {
        console.log(err);
        toast({
          variant: "destructive",
          description: "something went wrong!",
        });
        setIsLoading(false);
      });
    } else {
      if (!homestay) return;
      axios
        .post("/api/room", {...values, homestayId: homestay.id})
        .then((res) => {
          toast({
            variant: "success",
            description: "room created",
          });
          router.refresh()
          setIsLoading(false);
          handleDialogueOpen()
        })
        .catch((err) => {
          console.log(err);
          toast({
            variant: "destructive",
            description: "something went wrong!",
          });
          setIsLoading(false);
        });
    }
  }


  return (
    <div className="max-h-[75vh] overflow-y-auto px-2">
      <Form {...form}>
        <form className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RoomTitle</FormLabel>
                <FormDescription>Provide your room name</FormDescription>
                <FormControl>
                  <Input placeholder="Room" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Roomdescription</FormLabel>
                <FormDescription>
                  Is there any special about ths room
                </FormDescription>
                <FormControl>
                  <textarea placeholder="Room" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-3">
                <FormLabel>Image</FormLabel>
                <FormDescription>
                  Provide an image URL for your homestay
                </FormDescription>
                <FormControl>
                  {image ? (
                    <div className="relative max-w-[400px] min-w-[200px] max-h-[400px] min-h-[200px] mt-4">
                      <Image
                        fill
                        src={image}
                        alt="Homestay Image"
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <Button
                        onClick={() => handleImageDelete(image)}
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="absolute right-[-12px] top-0"
                      >
                        {imageIsDeleting ? <Loader2 /> : <XCircle />}
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center max-w[4000px] p-12 border-2 border-dashed border-primary/50 rounded mt-4">
                      <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          console.log("Files: ", res);
                          setImage(res[0].url);
                          toast({
                            variant: "success",
                            description: "Upload completed",
                          });
                        }}
                        onUploadError={(error: Error) => {
                          toast({
                            variant: "destructive",
                            description: `ERROR! ${error.message}`,
                          });
                        }}
                      />
                    </div>
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
 
         <div className="flex flex-row gap-6">

            <div className="flex-1 flex-col gap-6">
            <FormField
            control={form.control}
            name="roomPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room price</FormLabel>
                <FormDescription>
                  price of the room
                </FormDescription>
                <FormControl>
                  <Input type="number" min={0} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


<FormField
            control={form.control}
            name="bedCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bed count</FormLabel>
                <FormDescription>
                 how many beds are available
                </FormDescription>
                <FormControl>
                  <Input type="number" min={0} max={8} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="breakFastPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Breakfast price</FormLabel>
                <FormDescription>
                  price of the Breakfast
                </FormDescription>
                <FormControl>
                  <Input type="number" min={0} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            </div>

            

         </div>


<div className="pt-4 pb-2">

{room ? (
                  <Button type="button" onClick={form.handleSubmit(onSubmit)} className="max-w-[150px]" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4" /> Updating
                      </>
                    ) : (
                      <>
                        <PencilLine className="mr-2 h-4 w-4" /> Update
                      </>
                    )}
                  </Button>
                ) : (
                  <Button type="button" onClick={form.handleSubmit(onSubmit)}  className="max-w-[150px]" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4" /> Creating
                      </>
                    ) : (
                      <>
                        <Pen className="mr-2 h-4 w-4" /> Create Room
                      </>
                    )}
                  </Button>
                )}
</div>


        </form>
      </Form>
    </div>
  );
};

export default AddRoomForm;
