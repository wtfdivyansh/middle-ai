import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import invoiceJpeg from '@/public/images/invoice.jpeg'
import { CtaLink } from '../cta-link'

export default function AutomateReceipt() {
    return (
        <div className='flex items-center justify-center w-full '>
            <div className='container'>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold py-4 text-start glow flex-wrap flex-1 p-0">
                    Everything you need
                </h1>
                <p className='text-sm text-muted-foreground pb-8'>From automated receipt-to-transaction mapping to conversing with your financials and consolidating all your files.</p>
                <div className='w-full grid grid-cols-1 lg:grid-cols-5 gap-7 mb-8'>
                    <div className='block md:flex relative lg:col-span-3 border p-7 pb-0 group'>
                        <div className='flex flex-col items-start w-full md:w-1/2'>
                            <h2 className='font-medium text-xl md:text-2xl mb-4'>Invoicing</h2>
                            <p className='text-xs text-muted-foreground py-3'>Create and send invoices to your customers, monitor your sent balance, track overdue payments and send reminders.</p>
                            <div className="flex flex-col space-y-2 py-6">
                                {["Create Customers", "Add Vat & Sales tax", "Add discount", "Add Logo", "Send web invoices", "Export as PDF", "See if invoice is viewed"].map((item, index) => {
                                    return (
                                        <div key={index} className="flex space-x-2 items-center text-sm">
                                            <Check size={"17"} />
                                            <span className="text-xs">{item}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="absolute bottom-6">
                                <CtaLink text="Send your first invoice in second." />
                            </div>
                        </div>
                        <div className="relative flex flex-col items-start md:items-end w-full md:w-1/2">
                            <Image src={invoiceJpeg} alt="invoice" className='h-auto w-auto object-contain' />
                        </div>

                    </div>
                    <div className='lg:col-span-2 border p-7 relative group'>
                        {/* <h2 className='text-xl font-semibold'>Inbox</h2> */}
                        <h4 className="font-medium text-xl md:text-2xl mb-4">Inbox</h4>
                        <ul className="list-decimal list-inside text-[#878787] text-sm space-y-2 leading-relaxed">
                            <li>
                                Use your personalized email address for your invoices and receipts.
                            </li>
                            <li>
                                The invoice arrives in the inbox, Midday gives you a transaction
                                suggestion to match it with.
                            </li>
                            <li>
                                Your transaction now have the right basis/attachments for you to
                                export.
                            </li>
                        </ul>
                        <div className="flex flex-col space-y-2 my-6">
                            {["Personlized email", "Smart search receipts and invoices content", "Automatically saves invoices and receipt in your vault"].map((item, index) => {
                                return (
                                    <div key={index} className="flex space-x-2 items-center text-sm">
                                        <Check size={"17"} />
                                        <span className="text-xs">{item}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="absolute bottom-6">
                            <CtaLink text="Automate your reconciliation process" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
