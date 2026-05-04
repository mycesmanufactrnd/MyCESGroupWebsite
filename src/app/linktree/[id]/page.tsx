import { notFound } from "next/navigation";
import { teamMembers } from "@/src/components/team/LinkTree/TeamMember";
import LinkTree from "@/src/components/team/LinkTree/LinkTree";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function LinkTreePage({ params }: Props) {
  const { id } = await params;
  const member = teamMembers.find((m) => m.id === id);

  if (!member) notFound();

  return <LinkTree member={member} />;
}

export function generateStaticParams() {
  return teamMembers.map((m) => ({ id: m.id }));
}
