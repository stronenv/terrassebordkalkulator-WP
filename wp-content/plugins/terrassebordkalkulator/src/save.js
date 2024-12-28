/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<h3><span id="calculatedLopemeter">268</span> løpemeter terrassebord</h3>
			<h3><span id="calculatedSkruer">1300</span> skruer</h3>
			<div  class="terrassebordkalkulator__input">
				<div class="terrassebordkalkulator__input__display-row">
				<div>Antall kvadratmeter:</div>
				<strong><span id="kvm">30</span> m<sup>2</sup></strong>
				</div>
			<input type="range" class="terrassebordkalkulator__input__slider" name="kvmInput" id="kvmInput" min="1" max="300" value="30" aria-label="Antall kvadratmeter" />
			</div>
			<div class="terrassebordkalkulator__input">
			<div class="terrassebordkalkulator__input__display-row">
				<div>Terrassebord bredde</div>
				<strong><span id="bredde">120</span> mm</strong>
			</div>
			<input type="range"  class="terrassebordkalkulator__input__slider" name="breddeInput"  id="breddeInput" min="60" max="180" value="120" aria-label="Terrassebord bredde" />
			</div>
	  </div>
	);
}
