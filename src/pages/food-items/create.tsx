import Sidebar from "@/components/Sidebar";

import Input from "@/components/Input";
import ImageUploadButton from "@/components/ImageUploadButton";

export default function Home() {


  return (
    <Sidebar>
      <div className="pt-14 px-8 flex">
        <div className="bg-white p-9 rounded-[40px] w-[588px] flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <div>
              <p>Step 1/ 3</p>
              <p>Meal information</p>
            </div>
            <div className="flex p-4 items-center gap-6">
              <p>Icon</p>
              <p>Meal list</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="grid gap-[10px]">
              <Input
                item={{
                  title: "Meal name (EN)",
                  value: "Fried spicy vegetable",
                }}
              />
              <Input
                item={{
                  title: "Select category",
                  value: "Vegan",
                  options: [
                    {
                      label: "Vegan",
                      value: "vegan",
                    },
                    {
                      label: "Normal",
                      value: "normal",
                    },
                  ],
                  dropdown: true,
                  onSelect: () => {},
                }}
              />
              <Input
                item={{
                  title: "Select cooking time",
                  value: "30 min",
                  options: [
                    {
                      label: "30 min",
                      value: "30",
                    },
                    {
                      label: "1 hour",
                      value: "60",
                    },
                  ],
                  dropdown: true,
                  onSelect: () => {},
                }}
              />
              <ImageUploadButton />
            </div>
            <div className="grid gap-[10px]">second grid</div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
