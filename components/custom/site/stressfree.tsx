import { Button } from "../../ui/button";

export default function StressFree() {
    return (
        <div className="flex justify-center w-screen mb-10">
            <div className="container max-w-[90%] sm:mx-auto border bg-[#121212] flex-1 py-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold py-4 text-center glow flex-wrap flex-1">
                    Streamline Your Workflow
                </h1>
                <p className="text-center text-muted-foreground">
                    Invoking, Time tracking, File reconciliation, Storage, Financial Overview & your own
                </p>
                <p className="text-center text-muted-foreground">
                    Assitant
                </p>
                <div className="flex justify-center gap-3 items-center my-10">
                    <Button className="p-5 border border-white bottom-1" variant={"outline"}>
                        Task to founders
                    </Button>
                    <Button className="p-5" variant={"default"}>
                        Try it now
                    </Button>
                </div>
            </div>
        </div>
    )
}
