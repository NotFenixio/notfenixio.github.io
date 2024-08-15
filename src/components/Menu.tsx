import { Drawer } from "vaul";
import * as Dialog from "@radix-ui/react-dialog";
import { useMediaQuery } from "usehooks-ts";

interface MenuProps {
  title: string;
  triggerName: string;
  children: React.ReactNode;
}

export function Menu({title, triggerName, children}: MenuProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="p-1 border rounded-full w-10 h-10 fixed bottom-2 right-2 bg-zinc-900">{triggerName}</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-[#00000094] data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-zinc-900 p-[25px] focus:outline-none">
            <Dialog.Title className="text-xl">{title}</Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="hover:bg-zinc-800 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none"
                aria-label="Close"
              >
                X
              </button>
            </Dialog.Close>
            {children}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  } else {
    return (
      <Drawer.Root>
        <Drawer.Trigger asChild>
        <button className="p-1 border rounded-full w-10 h-10 fixed bottom-2 right-2 bg-zinc-900">{triggerName}</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 backdrop-blur-md bg-black/40" />
          <Drawer.Content
            className={
              "flex flex-col " +
              "rounded-t-[10px] " +
              "mt-24" +
              "h-[60%] max-h-[96%] " +
              "fixed bottom-0 left-0 right-0 " +
              "md:max-w-[550px] md:mx-auto lg:max-w-[50vw] bg-zinc-900 p-6"
            }
          >
            <Drawer.Handle className="bg-gray-300 mb-2" />
            <div className="flex flex-col">
              <Drawer.Title className="text-xl">{title}</Drawer.Title>
              {children}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }
}
