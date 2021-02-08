import { css } from "@emotion/react"

const baseNormalizer = css({
	padding: "unset",
	backgroundColor: "unset",
	border: "unset",
	":focus": {
		outline: "none",
	},
})

export const btnNormalize = [
	baseNormalizer,
	css({
		cursor: "pointer",
	}),
]
