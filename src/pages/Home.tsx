
import About from "../components/About";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Experience from "../components/Experience.tsx";
import Technology from "../components/Technology.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/index.ts";
import { useEffect } from "react";
import { fetchProfile } from "../store/profileSlice.ts";
import Loader from "../components/Loader.tsx";
import ErrorMessage from "../components/ErrorMessage.tsx";

export default function Home() {
	const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((s: RootState) => s.profile);

	useEffect(() => {
    if (!data) {
      dispatch(fetchProfile());
    }
  }, [dispatch, data]);

	if (loading || !data) return <Loader />;
	if (error || !data) return <ErrorMessage />;
  return (
    <div>
			<Hero name={data?.name!} />
			<About imageUrl={data.image} about={data?.about!} name={data?.name!} summary={data?.summary!} />
			<Technology technologies={data?.technologies!} />
      <Experience experiences={data?.experiences!} />
			<Education education={data?.education!}/>
		</div>
  );
}
