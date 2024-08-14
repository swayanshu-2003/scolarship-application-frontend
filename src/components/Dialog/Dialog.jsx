
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export function CustomDialog({ className, child, open, setOpen }) {
    return (
        <Dialog open={open} setOpen={setOpen} >
            <DialogContent className={`min-w-[500px] w-max ${className}`} open={open} setOpen={setOpen}>
                {child}
            </DialogContent>
        </Dialog>
    )
}
