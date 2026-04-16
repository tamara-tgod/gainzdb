
interface FilterProps {
  bodyPart: string;
  equipment: string;
  handleBodyPartFilter: (value: string) => void;
  handleEquipmentFilter: (value: string) => void;
  bodyParts: string[];
  equipments: string[];
}

const Sidebar = ({
    bodyPart,
    equipment,
    handleBodyPartFilter,
    handleEquipmentFilter,
    bodyParts,
    equipments,
}: FilterProps) => {


   console.log(bodyParts)

  return (
    <div className="flex flex-col gap-6 lg:w-[40vh]">
      <div id="bodyparts" className="flex flex-col gap-1">
        <h3 className="text-(--accent-text) uppercase text-sm">Body Parts</h3>
          {bodyParts.map((part) => (
          <div key={part}>
            <button 
            onClick={() => {
              console.log("selected body part:", part)
              handleBodyPartFilter(part)}}
            className={`hover:bg-(--muscle-bg) w-full text-start p-1 rounded-md
               ${
              bodyPart === part
                 ? "bg-(--accent) text-white"
              : "bg-(--muscle-bg) text-(--muscle-text)"
            }
              `}
            >{part} </button>
          </div>
        ))}
      
      </div>

           <div id="equipments" className="flex flex-col gap-2">
        <h3 className="text-(--accent-text) uppercase text-sm">Equipment</h3>
        {equipments.map((item) => (
          <div key={item}>
            <button 
            onClick={() => {
              console.log("selected equipment:", item)
              handleEquipmentFilter(item)}}
             className={`hover:bg-(--muscle-bg) w-full text-start p-1 rounded-md
              ${
              equipment === item
              ? "bg-(--accent) text-white"
              : "bg-(--muscle-bg) text-(--muscle-text)"
            }
              `}
            >{item} </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;


