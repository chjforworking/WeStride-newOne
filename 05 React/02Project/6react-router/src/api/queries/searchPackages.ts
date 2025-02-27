import type { PackageSummary } from "../types/packageSummary";

interface searchResponse {
  objects: {
    package: $package;
  }[];
}
interface $package {
  name: string;
  version: string;
  description: string;
  keywords: string[];
}

export async function searchPackages(
  $$term: string
): Promise<PackageSummary[]> {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${$$term}`
  );
  const data: searchResponse = await res.json();

  //ใช้ map แปลง object เป็น package
  return data.objects.map(
    ({ package: { name, version, description, keywords } }) => {
      return {
        name,
        version,
        description,
        keywords,
      };
    }
  );
}
