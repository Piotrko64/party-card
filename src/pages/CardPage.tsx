import { CardPageMainComponent } from "components/cardComponent/CardPageMainComponent";
import { ErrorScreen } from "components/errorScreen/ErrorScreen";
import { LoadingScreen } from "components/loadingScreen/LoadingScreen";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useChangesContentStoresByDatabaseInfo } from "./../hooks/useChangesContentStoresByDatabaseInfo";
import { useBackgroundStore } from "stores/BackgroundStore/BackgroundStore";
import { StartCardWithMusic } from "components/generatorPage/startCardWithMusic/StartCardWithMusic";
import { useState } from "react";

export function CardPage() {
  const { id } = useParams();
  const [
    wasClickedButtonToStartCardWithMusic,
    setwasClickedButtonToStartCardWithMusic,
  ] = useState<boolean>(false);
  const changeStoresData = useChangesContentStoresByDatabaseInfo();
  const { isLoading, isError } = useQuery(`card/${id!}`, () =>
    changeStoresData(id!)
  );

  const { music } = useBackgroundStore();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (music.isMusic && !wasClickedButtonToStartCardWithMusic) {
    return (
      <StartCardWithMusic
        onStart={() => setwasClickedButtonToStartCardWithMusic(true)}
      />
    );
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return <CardPageMainComponent />;
}
