import { ISchedule } from "@/services/api/types/ISchedule";
import { ISimpleSector } from "@/services/api/types/ISector";
import { IService } from "@/services/api/types/IService";
import { useFetch } from "@/services/useFetch";
import { useEffect, useState } from "react";

interface AllDataItem {
  title?: string;
  icon: string;
  link: string;
}

export const useMainSearch = () => {
  const { data: sectorData, loading: sectorLoading } =
    useFetch<ISimpleSector[]>(`sectors`);
  const { data: serviceData, loading: servicesLoading } =
    useFetch<IService[]>(`procedures`);
  const { data: scheduleData, loading: scheduleLoading } =
    useFetch<ISchedule[]>(`classes-schedule`);

  const [allData, setAllData] = useState<AllDataItem[]>([]);
  const loading = sectorLoading || servicesLoading || scheduleLoading;

  useEffect(() => {
    const fetchData = async () => {
      const newAllData: AllDataItem[] = [];

      if (sectorData) {
        sectorData.forEach((sector) => {
          newAllData.push({
            title: sector.name,
            icon: sector.icon,
            link: `setores/${sector.id}`,
          });
        });
      }

      if (serviceData) {
        serviceData.forEach((service) => {
          newAllData.push({
            title: service.title,
            icon: service.icon,
            link: `servicos/${service.id}`,
          });
        });
      }

      if (scheduleData) {
        scheduleData.forEach((schedule) => {
          newAllData.push({
            title: `Horário: ${schedule.course}`,
            icon: schedule.embed.icon,
            link: schedule.embed.link,
          });
        });
      }

      setAllData(newAllData);
    };

    fetchData();
  }, [loading, sectorData, serviceData, scheduleData]);

  return {
    allData,
    loading,
  };
};
