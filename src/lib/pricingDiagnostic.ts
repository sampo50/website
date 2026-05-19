/**
 * Pricing Diagnostic — recommendation engine (TypeScript source)
 * Runtime: assets/js/pricingDiagnostic.js (keep in sync)
 */

export type Industry =
	| 'hospitality'
	| 'coworking'
	| 'saas'
	| 'services'
	| 'ecommerce'
	| 'other';

export type CompanySize = 'micro' | 'small' | 'mid' | 'large' | 'unknown';

export type PainPoint =
	| 'underpricing'
	| 'intuition'
	| 'discounting'
	| 'packaging'
	| 'sales_confidence'
	| 'capacity'
	| 'channels'
	| 'model';

export interface Recommendation {
	title: string;
	description: string;
	cta: string;
	href: string;
	intensityNote?: string;
}

type ServiceKey =
	| 'revenuePerformanceAudit'
	| 'pricingSprint'
	| 'revenueCapacityAudit'
	| 'saasPackagingSprint'
	| 'valueBasedSprint'
	| 'saasPricingAudit'
	| 'pricingAudit'
	| 'marginDiagnostic'
	| 'generalDiagnostic';

const SERVICE_CATALOG: Record<ServiceKey, Omit<Recommendation, 'intensityNote'>> = {
	revenuePerformanceAudit: {
		title: 'Suositus: Revenue Performance Audit',
		description:
			'Tämä audit sopii, jos haluat selvittää, missä hinnoittelu, käyttöaste, kanavat, segmenttimix tai B2B-myynti vuotaa.',
		cta: 'Siirry Revenue Performance Auditiin',
		href: '/revenue-performance-audit/'
	},
	pricingSprint: {
		title: 'Suositus: Pricing Sprint',
		description:
			'Tiivis kehitysjakso hinnoittelumallille, paketoinnille tai hinnan perustelulle — konkreettinen seuraava askel.',
		cta: 'Siirry Pricing Sprintiin',
		href: '/pricing-sprint/'
	},
	revenueCapacityAudit: {
		title: 'Suositus: Revenue & Capacity Pricing Audit',
		description:
			'Tämä audit sopii, jos haluat parantaa tilojen käyttöastetta, segmenttikohtaista hinnoittelua, jäsenmalleja ja B2B-myyntiä.',
		cta: 'Siirry auditiin',
		href: '/pricing-audit/coworking/'
	},
	saasPackagingSprint: {
		title: 'Suositus: SaaS Pricing & Packaging Sprint',
		description:
			'Selkeytä paketteja, arvolupauksia, hintaportaita, value metriciä tai expansion revenue -logiikkaa.',
		cta: 'Siirry sprinttiin',
		href: '/pricing-sprint/saas/'
	},
	valueBasedSprint: {
		title: 'Suositus: Value-Based Pricing Sprint',
		description:
			'Siirry tunti- tai kustannuspohjaisesta hinnoittelusta kohti arvoon perustuvaa paketointia ja hinnan perustelua.',
		cta: 'Siirry sprinttiin',
		href: '/pricing-sprint/value-based-pricing/'
	},
	saasPricingAudit: {
		title: 'Suositus: SaaS Pricing Audit',
		description:
			'Analysoi hinnoittelun, pakettien, segmenttien ja revenue-logiikan nykytila SaaS-mallissasi.',
		cta: 'Siirry auditiin',
		href: '/pricing-audit/'
	},
	pricingAudit: {
		title: 'Suositus: Pricing Audit',
		description:
			'Lyhyt analyysi hinnoittelun, segmenttien, pakettien, katteen ja kaupallisen logiikan nykytilasta.',
		cta: 'Siirry Pricing Auditiin',
		href: '/pricing-audit/'
	},
	marginDiagnostic: {
		title: 'Suositus: Margin & Pricing Diagnostic',
		description:
			'Tunnista, missä hinnat, kampanjat, alennukset, valikoima tai katelogiikka heikentävät kannattavuutta.',
		cta: 'Siirry auditiin',
		href: '/pricing-audit/margin/'
	},
	generalDiagnostic: {
		title: 'Suositus: General Pricing Diagnostic',
		description:
			'Kevyt keskustelu tai diagnostic selvittääksesi, mikä hinnoittelun kehityspolku sopii tilanteeseesi.',
		cta: 'Varaa keskustelu',
		href: '/contact/'
	}
};

const INTENSITY_NOTES: Record<CompanySize, string | null> = {
	micro:
		'Koska yrityksesi on vielä pienemmässä vaiheessa, suosittelen aloittamaan kevyellä diagnostic-keskustelulla tai rajatulla sprintillä ennen laajempaa auditia.',
	small: 'Tässä kokoluokassa rajattu audit tai sprintti voi nopeasti selkeyttää hinnoittelun suurimmat kaupalliset vivut.',
	mid: 'Tässä kokoluokassa hinnoittelu, segmentointi ja myyntimalli alkavat usein monimutkaistua. Audit auttaa priorisoimaan, mitä kannattaa korjata ensin.',
	large:
		'Tässä kokoluokassa hinnoittelun vaikutus kertautuu segmenttien, kanavien, yksiköiden ja myyntitiimien yli. Suositus kannattaa käsitellä johdon kaupallisena roadmapina.',
	unknown: null
};

export function resolveServiceKey(industry: Industry, pain: PainPoint): ServiceKey {
	switch (industry) {
		case 'hospitality':
			if (pain === 'packaging' || pain === 'sales_confidence') return 'pricingSprint';
			return 'revenuePerformanceAudit';
		case 'coworking':
			if (pain === 'packaging' || pain === 'model') return 'pricingSprint';
			if (pain === 'sales_confidence') return 'valueBasedSprint';
			return 'revenueCapacityAudit';
		case 'saas':
			if (pain === 'packaging' || pain === 'model' || pain === 'sales_confidence') {
				return 'saasPackagingSprint';
			}
			if (pain === 'capacity') return 'generalDiagnostic';
			return 'saasPricingAudit';
		case 'services':
			if (
				pain === 'underpricing' ||
				pain === 'sales_confidence' ||
				pain === 'packaging' ||
				pain === 'model'
			) {
				return 'valueBasedSprint';
			}
			return 'pricingAudit';
		case 'ecommerce':
			if (pain === 'discounting' || pain === 'underpricing' || pain === 'channels') {
				return 'marginDiagnostic';
			}
			if (pain === 'packaging' || pain === 'model') return 'pricingSprint';
			return 'generalDiagnostic';
		default:
			return 'generalDiagnostic';
	}
}

export function getIntensityNote(size: CompanySize): string | undefined {
	return INTENSITY_NOTES[size] ?? undefined;
}

export function getRecommendation(
	industry: Industry,
	size: CompanySize,
	pain: PainPoint
): Recommendation {
	const serviceKey = resolveServiceKey(industry ?? 'other', pain ?? 'model');
	const base = SERVICE_CATALOG[serviceKey];
	const intensityNote = getIntensityNote(size ?? 'unknown');

	return {
		...base,
		...(intensityNote ? { intensityNote } : {})
	};
}
