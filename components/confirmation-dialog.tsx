import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";

/**
 * Parameters of the Confirmation Dialog component
 */
export interface ConfirmationDialogParams {

  /**
   * Sets whether the dialog should be open or closed
   */
	open : boolean,

  /**
   * Updates open/close status of the component
   */
	setOpenChange: Dispatch<SetStateAction<boolean>>,

  /**
   * Specifies the function to be executed when user confirms the dialog.
   */
	onOperationConfirmed: () => void,

  /**
   * Specifies which operation needs confirming, used to display correct text.
   */
  operation: string
}

/**
 * Dialog which prompts the user to confirm their action before executing some code.
 * @param params Parameters of the Confirmation Dialog
 * @returns 
 */
export function ConfirmationDialog({
  params
}: {
  params: ConfirmationDialogParams
}){
	return (
		<Dialog open={params.open} onOpenChange={params.setOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Bist du dir sicher?</DialogTitle>
					<DialogDescription>
						Das {params.operation} kann nicht Rückgängig gemacht werden.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button onClick={() => params.onOperationConfirmed()}>{params.operation}</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
