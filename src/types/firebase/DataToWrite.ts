import { BackgroundStoreWithoutFunctions } from "types/stores/BackgroundStore";
import { HeaderSection } from "types/stores/HeaderSection";
import { UnionWishElements } from "types/stores/WishesSectionStore";

export type DataToWriteToDataBaseType = {
    date?: string;
    nameAuthor: string;
    idAuthor: string;
    headerSection: HeaderSection;
    wishesSection: Array<UnionWishElements>;
    backgroundSection: BackgroundStoreWithoutFunctions;
};
