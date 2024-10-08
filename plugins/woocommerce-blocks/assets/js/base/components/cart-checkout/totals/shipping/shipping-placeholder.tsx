/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { CalculatorButton, CalculatorButtonProps } from './calculator-button';

export interface ShippingPlaceholderProps {
	showCalculator: boolean;
	isShippingCalculatorOpen: boolean;
	isCheckout?: boolean;
	setIsShippingCalculatorOpen: CalculatorButtonProps[ 'setIsShippingCalculatorOpen' ];
}

export const ShippingPlaceholder = ( {
	showCalculator,
	isShippingCalculatorOpen,
	setIsShippingCalculatorOpen,
	isCheckout = false,
}: ShippingPlaceholderProps ): JSX.Element => {
	if ( ! showCalculator ) {
		return (
			<em>
				{ isCheckout
					? __( 'No shipping options available', 'woocommerce' )
					: __( 'Calculated during checkout', 'woocommerce' ) }
			</em>
		);
	}

	return (
		<CalculatorButton
			label={ __(
				'Enter address to check delivery options',
				'woocommerce'
			) }
			isShippingCalculatorOpen={ isShippingCalculatorOpen }
			setIsShippingCalculatorOpen={ setIsShippingCalculatorOpen }
		/>
	);
};

export default ShippingPlaceholder;
