import { useState } from 'react';
import { SketchPicker } from 'react-color';

function InputPicker({ id, label, customColor, handleQrCustom }) {
	const [showPicker, setShowPicker] = useState(false),
			handleShowPicker = ()=> setShowPicker(!showPicker);
}

export default InputPicker;