"use client";
import DeleteAddress from "@/app/action/address/delete";
import Button from "@/app/components/ui/button";
import { TrashBin } from "akar-icons";
import { toast } from "sonner";

interface DeleteAddressButtonProps {
    id: string
}

function DeleteAddressButton(props: DeleteAddressButtonProps) {
    return (
        <div>
            <form action={DeleteAddress}>
                <input type="hidden" name="address-id" value={props.id} />
                <Button unStyle icon={<TrashBin width={13} height={13} color="rgb(248 113 113 / var(--tw-text-opacity, 1))" />}  className="!w-auto !text-[12px] text-red-400" onPress={() => toast.success("آدرس حذف شد")}>حذف آدرس</Button>
            </form>
        </div>
    )
}

export default DeleteAddressButton;