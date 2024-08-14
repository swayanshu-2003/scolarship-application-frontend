
import {
    Dialog,
    DialogContent,
} from "@/components/ui/Dialog"


export function CustomDialog({ className, child, open, setOpen }) {
    return (
        <Dialog open={open} setOpen={setOpen} >
            <DialogContent className={`min-w-[500px] w-max ${className}`} open={open} setOpen={setOpen}>
                {child}
            </DialogContent>
        </Dialog>
    )
}
