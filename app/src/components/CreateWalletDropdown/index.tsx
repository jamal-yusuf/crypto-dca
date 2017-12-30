import * as React from 'react';
import DropdownWithCreate from '../DropdownWithCreate';
import AddWalletFieldGroup from '../AddWalletFieldGroup';
import { Wallet } from '../../services/wallets';
import { toTitleCase } from '../../utils/toTitleCase';

interface CreateWalletDropdownProps {
  name: string;
  wallets: Wallet[];
}

const CreateWalletDropdown = ({
  name,
  wallets
}: CreateWalletDropdownProps) => (
  <DropdownWithCreate
    type="wallet"
    name={`${name}Wallet`}
    options={
      wallets &&
      wallets.map(wallet => ({
        label: wallet.name,
        value: wallet.id
      }))
    }
    newForm={
      <AddWalletFieldGroup
        prefix={`new${toTitleCase(name)}Wallet`}
      />
    }
  />
);

export default CreateWalletDropdown;