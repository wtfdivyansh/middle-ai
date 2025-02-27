import { Icons } from "@/components/icons";

export function SocialLinks() {
  return (
    <ul className="flex space-x-4 items-center md:ml-5">
      <li>
        <a target="_blank" rel="noreferrer" href="https://x.com/getplura">
          <span className="sr-only">Twitter</span>
            <Icons.twitter className="fill-[#878787] h-5 w-5" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/SkidGod4444/middle-ai">
          <span className="sr-only">Discord</span>
            <Icons.discord className="fill-[#878787] h-5 w-5" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/SkidGod4444/middle-ai">
          <span className="sr-only">Github</span>
            <Icons.gitHub className="fill-[#878787] h-5 w-5" />
        </a>
      </li>
    </ul>
  );
}
