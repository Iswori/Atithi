"use client";

import { Homestay, Room } from "@prisma/client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { UploadButton } from "../uploadthing";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import {
  Eye,
  Loader2,
  Pen,
  PencilLine,
  Plus,
  Terminal,
  Trash,
  XCircle,
} from "lucide-react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddRoomForm from "../room/AddRoomForm";
import RoomCard from "../room/RoomCard";
import { Separator } from "@radix-ui/react-dropdown-menu";

interface AddHomestayformProps {
  homestay?: HomestayWithRooms | null;
}

export type HomestayWithRooms = Homestay & {
  rooms: Room[];
};

const formschema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long" }),
  image: z.string().min(1, { message: "Image is required" }),
  locationDescription: z.string().min(10, {
    message: "Location description must be at least 10 characters long",
  }),
});

const AddHomestayform = ({ homestay }: AddHomestayformProps) => {
  const [image, setImage] = useState<string | undefined>(homestay?.image);
  const [imageIsDeleting, setImageIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHomestayDeleting, setIsHomestayDeleting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues: {
      title: homestay?.title || "",
      description: homestay?.description || "",
      image: homestay?.image || "",
      locationDescription: homestay?.locationDescription || "",
    },
  });

  const { setValue } = form;

  async function onSubmit(values: z.infer<typeof formschema>) {
    setIsLoading(true);

    if (homestay) {
      axios
        .patch(`/api/homestay/${homestay.id}`, values)
        .then((res) => {
          toast({
            variant: "success",
            description: "Homestay updated",
          });
          router.push(`/homestay/${res.data.id}`);
          setIsLoading(false);
          
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
      axios
        .post("/api/homestay", values)
        .then((res) => {
          toast({
            variant: "success",
            description: "Homestay created",
          });
          router.push(`/homestay/${res.data.id}`);
          setIsLoading(false);
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

  const handleDeleteHomestay = async (homestay: HomestayWithRooms) => {
    setIsHomestayDeleting(true);
    const getImageKey = (src: string) =>
      src.substring(src.lastIndexOf("/") + 1);
    try {
      const imageKey = getImageKey(homestay.image);
      await axios.delete(`/api/homestay/${homestay.id}`);
      await axios.post("/api/uploadthing/delete", { imageKey });

      toast({
        variant: "success",
        description: "Homestay deleted!",
      });
      router.push("/homestay/new"); // Redirect after deletion
    } catch (error: any) {
      console.log(error);
      toast({
        variant: "destructive",
        description: `An unexpected error occurred! ${error.message}`,
      });
    } finally {
      setIsHomestayDeleting(false);
    }
  };

  const handleImageDelete = async (imageUrl: string) => {
    setImageIsDeleting(true);
    const imageKey = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);

    try {
      const res = await axios.post("/api/uploadthing/delete", {
        imagekey: imageKey,
      });
      if (res.data.success) {
        setImage("");
        setValue("image", ""); // Clear the form field value
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



const handleDialogueOpen = ()=>{
  setOpen(prev => !prev)
}




  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h3 className="text-lg">
            {homestay ? "Update your homestay!" : "Describe your homestay!"}
          </h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Homestay Title</FormLabel>
                    <FormDescription>
                      Provide your homestay name
                    </FormDescription>
                    <FormControl>
                      <Input placeholder="Homestay" {...field} />
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
                    <FormLabel>Description</FormLabel>
                    <FormDescription>
                      Provide a brief description of your homestay
                    </FormDescription>
                    <FormControl>
                      <textarea
                        placeholder="Description"
                        {...field}
                        className="textarea"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="locationDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location Description</FormLabel>
                    <FormDescription>
                      Provide a description of the location
                    </FormDescription>
                    <FormControl>
                      <Input placeholder="Location Description" {...field} />
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
                              setValue("image", res[0].url); // Set the value in the form
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

              {homestay && !homestay.rooms.length && (
                <Alert className="bg-indigo-600 text-white">
                  <Terminal className="h-4 w-4 stroke-white" />
                  <AlertTitle>one last step!</AlertTitle>
                  <AlertDescription>
                    Your homestay was created successfully
                    <div>
                      Please add some rooms to complete your homestay setup
                    </div>
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex justify-between gap-2 flex-wrap">
                {homestay && (
                  <Button
                    onClick={() => handleDeleteHomestay(homestay)}
                    variant="ghost"
                    type="button"
                    className="max-w-[150px]"
                    disabled={isHomestayDeleting || isLoading}
                  >
                    {isHomestayDeleting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4" /> Deleting
                      </>
                    ) : (
                      <>
                        <Trash className="mr-2 h-4 w-4" aria-hidden="true" />
                        Delete
                      </>
                    )}
                  </Button>
                )}

                {homestay && (
                  <Button
                    onClick={() =>
                      router.push(`/homestay-details/${homestay.id}`)
                    }
                    variant="outline"
                  >
                    {" "}
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Button>
                )}

                {homestay && (
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger>
                      <Button
                        type="button"
                        variant="outline"
                        className="max-w-[150px]"
                      >
                        <Plus className="mr-2 h-4 w-4" /> Add Room
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[900px] w-[90%]">
                      <DialogHeader className="px-2">
                        <DialogTitle>Add a room </DialogTitle>
                        <DialogDescription>
                          add details about a room in your hotel.
                        </DialogDescription>
                      </DialogHeader>
                      <AddRoomForm homestay={homestay} handleDialogueOpen={handleDialogueOpen} />
                    </DialogContent>
                  </Dialog>
                )}

                {homestay ? (
                  <Button className="max-w-[150px]" disabled={isLoading}>
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
                  <Button className="max-w-[150px]" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4" /> Creating
                      </>
                    ) : (
                      <>
                        <Pen className="mr-2 h-4 w-4" /> Create 
                      </>
                    )}
                  </Button>
                )}
              </div>



              {homestay && homestay.rooms.length > 0 && (
  <div>
    <Separator />
    <h3 className='text-lg font-semibold my-4'> Rooms</h3>
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
      {homestay.rooms.map(room => (
        <RoomCard key={room.id} homestay={homestay} room={room} />
      ))}
    </div>
  </div>
)}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddHomestayform;



